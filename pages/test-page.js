import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/thq-react-components'

import testPageResource from '../resources/test-page'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Regional Directives Director</title>
          <meta
            property="og:title"
            content="test-page - Regional Directives Director"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_r7b8k1) => (
            <>
              <h1>{context_r7b8k1?.name}</h1>
            </>
          )}
          initialData={props.contextR7b8k1Prop}
          persistDataDuringLoading={true}
          key={props?.contextR7b8k1Prop?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  const contextR7b8k1Prop = await testPageResource({
    ...context?.params,
  })
  return {
    props: {
      contextR7b8k1Prop: contextR7b8k1Prop?.data?.[0],
    },
  }
}
