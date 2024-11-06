import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(HelloWorld)
    expect(wrapper.text()).toContain('Hello World')
  })
})
