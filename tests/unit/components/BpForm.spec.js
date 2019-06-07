import { shallowMount } from '@vue/test-utils'
import { Fields } from '@/lib/types/field.js'
import { Layout } from '@/lib/types/layout.js'
import Vue from 'vue'
import Vuetify from 'vuetify'
import BpForm from '@/components/form/BpForm.vue'
import BpTextField from '@/components/formFields/BpTextField.vue'
import BpTextArea from '@/components/formFields/BpTextArea.vue'
import BpSelectList from '@/components/formFields/BpSelectList.vue'
import BpToggle from '@/components/formFields/BpToggle.vue'
import BpDatePicker from '@/components/formFields/BpDatePicker.vue'
import BpTimePicker from '@/components/formFields/BpTimePicker.vue'
import BpRadio from '@/components/formFields/BpRadio.vue'

const factory = (propsData) => {
    return shallowMount(BpForm, {
        propsData: {
            ...propsData
        }
    })
}

beforeEach(() => {
    Vue.use(Vuetify)
})

describe('BpForm.vue', () => {
    describe('Text field', () => {
        it('Renders text field', () => {
          const wrapper = factory({ 
              fields: [{ type: Fields.TEXT }]
            })
    
            expect(wrapper.find(BpTextField).isVueInstance()).toBe(true)
        })

        it('Does not renders text field', () => {
            const wrapper = factory({ 
                fields: []
            })
    
            expect(wrapper.find(BpTextField).exists()).toBe(false)
        })
    })

    describe('Text area', () => {
        it('Renders text area', () => {
            const wrapper = factory({ 
                fields: [{ type: Fields.TEXTAREA }]
            })
    
            expect(wrapper.find(BpTextArea).exists()).toBe(true)
        })

        it('Does not renders text area', () => {
            const wrapper = factory({ 
                fields: []
            })
    
            expect(wrapper.find(BpTextArea).exists()).toBe(false)
        })
    })

    describe('Select list', () => {
        it('Renders select list', () => {
            const wrapper = factory({ 
                fields: [{ type: Fields.SELECTLIST }]
            })
    
            expect(wrapper.find(BpSelectList).exists()).toBe(true)
        })

        it('Does not renders select list', () => {
            const wrapper = factory({ 
                fields: []
            })
    
            expect(wrapper.find(BpSelectList).exists()).toBe(false)
        })
    })

    describe('Toggle switch', () => {
        it('Renders toggle switch', () => {
            const wrapper = factory({ 
                fields: [{ type: Fields.TOGGLE }]
            })
    
            expect(wrapper.find(BpToggle).exists()).toBe(true)
        })

        it('Does not renders toggle switch', () => {
            const wrapper = factory({ 
                fields: []
            })
    
            expect(wrapper.find(BpToggle).exists()).toBe(false)
        })
    })

    describe('Date picker', () => {
        it('Renders date picker', () => {
            const wrapper = factory({ 
                fields: [{ type: Fields.DATE }]
            })
    
            expect(wrapper.find(BpDatePicker).exists()).toBe(true)
        })

        it('Does not renders date picker', () => {
            const wrapper = factory({ 
                fields: []
            })
    
            expect(wrapper.find(BpDatePicker).exists()).toBe(false)
        })
    })

    describe('Time picker', () => {
        it('Renders time picker', () => {
            const wrapper = factory({ 
              fields: [{ type: Fields.TIME }]
            })
    
            expect(wrapper.find(BpTimePicker).exists()).toBe(true)
        })

        it('Does not renders time picker', () => {
            const wrapper = factory({ 
                fields: []
            })
    
            expect(wrapper.find(BpTimePicker).exists()).toBe(false)
        })
    })

    describe('Radio switch', () => {
        it('Renders radio switch', () => {
            const wrapper = factory({ 
              fields: [{ type: Fields.RADIO }]
            })
    
            expect(wrapper.find(BpRadio).exists()).toBe(true)
        })

        it('Does not renders radio switch', () => {
            const wrapper = factory({ 
                fields: []
            })
    
            expect(wrapper.find(BpRadio).exists()).toBe(false)
        })
    })
})