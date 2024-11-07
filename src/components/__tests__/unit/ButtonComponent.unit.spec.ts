import { describe, expect, it, vitest, type Mock } from 'vitest'

import { shallowMount, VueWrapper } from '@vue/test-utils'
import ButtonComponent from '../../ButtonComponent.vue'
import { beforeEach } from 'vitest'

describe('<ButtonComponent>', () => {
  let wrapper: VueWrapper
  let submit: Mock
  beforeEach(() => {
    submit = vitest.fn()
    wrapper = shallowMount(ButtonComponent, {
      props: {
        type: 'submit',
        click: submit,
      },
      slots: {
        default: 'Enviar',
      },
    })
  })

  it('should render the slot content successfully', () => {
    expect(wrapper.find('button').text()).toBe('Enviar')
  })
  it('Should called "click" function with successfuly', async () => {
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(submit).toBeCalled()
  })
})
