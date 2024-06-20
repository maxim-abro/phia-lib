import { createVNode, render } from 'vue';
import MNotify from "./MNotify.vue";
const notifications = {
  'bottom-left': [],
  'bottom-right': [],
  'top-left': [],
  'top-right': []
};
let _context = null;
let seed = 1;
export default function useNotify() {
  function openNotify(props) {
    let topRight = document.querySelector('.top-right');
    if (!topRight) {
      topRight = document.createElement('div');
      topRight.classList.add('top-right');
      document.body.appendChild(topRight);
    }
    const id = `m-notify-${seed++}`;
    const container = document.createElement('div');
    const position = props.position || 'top-right';
    const verticalOffset = notifications[position].reduce((acc, { vm }) => {
      acc += (vm.el?.offsetHeight || 0) + 16;
      return acc;
    }, 16);
    const vm = createVNode(MNotify, {
      ...props,
      id,
      class: 'notify',
      offset: verticalOffset,
      onClose: () => {
        closeNotify(id, position);
      }
    });
    vm.appContext = _context;
    vm.props.onDestroy = () => {
      render(null, container);
    };
    render(vm, container);
    notifications[position].push({ vm });
    topRight?.appendChild(container.firstElementChild);
    setTimeout(() => {
      closeNotify(id, position);
    }, 3000);
  }
  function closeNotify(id, position) {
    const orientedNotifications = notifications[position];
    const idx = orientedNotifications.findIndex(({ vm }) => vm.component?.props.id === id);
    if (idx === -1)
      return;
    const { vm } = orientedNotifications[idx];
    if (!vm)
      return;
    orientedNotifications.splice(idx, 1);
    document.querySelector(`#${id}`)?.remove();
  }
  return {
    openNotify,
    closeNotify
  };
}
export const install = (app) => {
  _context = app._context;
  app.config.globalProperties['$notify'] = useNotify;
};
//# sourceMappingURL=useNotify.js.map