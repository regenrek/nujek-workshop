import Vue from 'vue'
import Nujek from '~nujek-ui/plugin'
import { NjSection } from '~nujek-ui/components'

const settings = {
  NjSection: {
    component: NjSection,
    props: {
      variants: {
        bgConstraintYellow: {
          wrapper: 'flex border border-b py-10 max-w-4xl w-full mx-auto px-12 bg-yellow-100'
        }
      }
    }
  }
}

Vue.use(Nujek, settings)
