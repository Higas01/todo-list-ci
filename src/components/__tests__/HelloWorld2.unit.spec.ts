import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import HelloWorld2 from '../../components/HelloWorld2.vue'

describe('HelloWorld2', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(HelloWorld2)
    expect(wrapper.text()).toContain('Hello World2')
  })
})
