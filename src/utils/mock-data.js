import G from './common'
export default {

  ['POST *'+G.p_test_url] (pathMatch, query, request) {
    let body = {"totalCount":199}
    return {
      body: body,
      status: 200,
      statusText: 'OK',
      headers: { /*headers*/ },
      deylay: 500, // millisecond
    }
  }
}
