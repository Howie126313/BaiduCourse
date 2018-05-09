import san, {DataTypes} from 'san'

import {router, link} from 'san-router'

import Hello from './pages/Hello.san'
import Mission2_2 from './pages/Mission2_2.san'
import Mission2_3 from './pages/Mission2_3.san'
import Mission2_4 from './pages/Mission2_4.san'

router.add({rule: '/', Component: Hello, target: '#root'})
router.add({rule: '/mission2_2', Component: Mission2_2, target: '#root'})
router.add({rule: '/mission2_3', Component: Mission2_3, target: '#root'})
router.add({rule: '/mission2_4', Component: Mission2_4, target: '#root'})

router.start()