import san from 'san'

import {router} from 'san-router'

import Hello from './component/Hello.san'

router.add({rule: '/', Component: Hello, target: '#root'})

router.start()

