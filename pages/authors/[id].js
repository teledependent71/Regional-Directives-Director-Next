import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/thq-react-components'
import PropTypes from 'prop-types'

import authorsPageInitialPaths1db87Resource from '../../resources/authors-page-initial-paths-1db87'
import authorsPageInitialPropsFc621Resource from '../../resources/authors-page-initial-props-fc621'

const Authors = (props) => {
  return (
    <>
      <div className="authors-container">
        <Head>
          <title>Authors - Regional Directives Director</title>
          <meta
            property="og:title"
            content="Authors - Regional Directives Director"
          />
        </Head>
        <DataProvider
          renderSuccess={(AuthorsEntity) => (
            <>
              <div className="authors-container1">
                <h1>{AuthorsEntity?.name}</h1>
                <span>{AuthorsEntity?.id}</span>
              </div>
            </>
          )}
          initialData={props.authorsEntity}
          persistDataDuringLoading={true}
          key={props?.authorsEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .authors-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .authors-container1 {
            gap: 12px;
            width: 100%;
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Authors.defaultProps = {
  authorsEntity: [],
}

Authors.propTypes = {
  authorsEntity: PropTypes.array,
}

export default Authors

export async function getStaticPaths() {
  const response = await authorsPageInitialPaths1db87Resource({})
  return {
    paths: (response?.data || []).map((item) => {
      return {
        params: {
          id: (item?.id).toString(),
        },
      }
    }),
    fallback: 'blocking',
  }
}

export async function getStaticProps(context) {
  const response = await authorsPageInitialPropsFc621Resource({
    ...context?.params,
  })
  return {
    props: {
      authorsEntity: response?.data?.[0],
      ...response?.meta,
    },
    revalidate: 60,
  }
}
