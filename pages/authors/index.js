import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/thq-react-components'
import PropTypes from 'prop-types'

import authorsPageInitialProps3298dResource from '../../resources/authors-page-initial-props-3298d'

const Authors1 = (props) => {
  return (
    <>
      <div className="authors1-container">
        <Head>
          <title>Authors1 - Regional Directives Director</title>
          <meta
            property="og:title"
            content="Authors1 - Regional Directives Director"
          />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(AuthorsEntities) => (
                  <>
                    <div className="authors1-container1">
                      <h1>{AuthorsEntities?.name}</h1>
                      <span>{AuthorsEntities?.name}</span>
                      <span>{AuthorsEntities?.id}</span>
                    </div>
                  </>
                )}
              />
            </>
          )}
          initialData={props.authorsEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .authors1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .authors1-container1 {
            gap: 12px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Authors1.defaultProps = {
  authorsEntities: [],
}

Authors1.propTypes = {
  authorsEntities: PropTypes.array,
}

export default Authors1

export async function getStaticProps(context) {
  const response = await authorsPageInitialProps3298dResource({
    ...context?.params,
  })
  return {
    props: {
      authorsEntities: response,
      ...response?.meta,
    },
    revalidate: 60,
  }
}
