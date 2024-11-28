import { Directive } from 'vue'

type ClickOutsideHTMLElement = HTMLElement & {
  clickOutsideEvent?: EventListenerOrEventListenerObject
}

const clickOutside: Directive = {
  beforeMount(el: ClickOutsideHTMLElement, binding) {
    el.clickOutsideEvent = function (event: Event) {
      if (!(el === event.target || el.contains(event.target as Node))) {
        binding.value(event)
      }
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted(el: ClickOutsideHTMLElement) {
    if (el.clickOutsideEvent) {
      document.removeEventListener('click', el.clickOutsideEvent)
    }
  },
}

export default clickOutside

