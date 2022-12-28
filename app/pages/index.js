import Head from 'next/head'
import Image from 'next/image'
import Format from '../components/Layout';

// compoenents
import Section1 from '../components/section1';
import Section2 from '../components/section2';
import Section3 from '../components/section3';
import Section4 from '../components/section4';

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { supabase } from '../api'
import Layout from '../components/Layout';



export default function Home() {

  <Layout>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
   </Layout>
   

}
