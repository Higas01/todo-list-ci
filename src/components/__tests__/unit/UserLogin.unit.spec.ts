import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import UserLogin from '../../UserLogin.vue'

describe('<UserLogin/>', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(UserLogin)
    expect(wrapper.find('h1').text()).toBe('Bem Vindo ao nosso sistema')
  })
})
