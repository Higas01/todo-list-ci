import { describe, expect, it } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import InputComponent from '../../InputComponent.vue'
import { ref } from 'vue'

describe('<InputComponent>', () => {
  it('updates v-model value when input is changed', async () => {
    const model = ref('')
    const wrapper = shallowMount(InputComponent, {
      props: {
        type: 'text',
        name: 'username',
        modelValue: model.value,
        'onUpdate:modelValue': (value: string) => (model.value = value),
      },
    })

    const input = wrapper.find('input')
    const text = 'test input'
    await input.setValue(text)

    expect(model.value).toBe(text)
  })
})
