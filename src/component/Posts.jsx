import React, { useEffect } from 'react'

import ApiFetch from './ApiFetch'
function Posts({data}) {

  return (
<div>
id:   {data.id}

body:   {data.body}
title:   {data.title}

</div>
  )
}

export default ApiFetch(Posts)