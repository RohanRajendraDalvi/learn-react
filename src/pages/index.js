// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
//import Form from './qcomps/stuckForm'
import FeedbackForm from './qcomps/thankYouCrash'
import Counter from './components/snapshot'
import RequestTracker from './qcomps/shoppingCart'
import Scoreboard from './qcomps/updObjectsForm'
//import Scoreboard from './qcomps/updObjectsForm'
//import Form from './qcomps/updObjects'

export default function Home() {
  return (
    <div className={styles.main}>
        <Scoreboard/>
        
    </div>
  )
}
