import React from 'react';
import { gql } from '@apollo/client';

// create CoreCode component
export default function CoreCode(props) {
  return (
	<pre dangerouslySetInnerHTML={{__html: props.attributes.content}}></pre>
  );
}

CoreCode.displayName = 'CoreCode';

CoreCode.fragments = {
	key: `CoreCodeBlockFragment`,
	entry: gql`
	  fragment CoreCodeBlockFragment on CoreCode {
		attributes {
		  borderColor
		  backgroundColor
		  content
		  style
		  textColor
		  fontSize
		  fontFamily
		  cssClassName
		}
	  }
	`,
  };