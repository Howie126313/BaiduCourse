import san, {DataTypes} from 'san'

import {router, link} from 'san-router'

import Hello from './component/Hello.san'
import Mission2_2 from './component/Mission2_2.san'

router.add({rule: '/', Component: Hello, target: '#root'})
router.add({rule: '/mission2_2', Component: Mission2_2, target: '#root'})

router.start()