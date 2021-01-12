import React, { FC } from 'react'
import { PageProps } from 'gatsby'
import Layout from '../components/layout'
import MastHead from '../components/mastHead'


const IndexPage: FC<PageProps> = () => {

    return (

        <Layout>

            <MastHead />

            <div style={{height: `300vh`}}>

            </div>

        </Layout>

    )

}


export default IndexPage
