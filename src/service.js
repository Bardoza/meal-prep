
const url ="/ingredients";




export const save = async ingredient => {
  const options = {
    method:"post",
    headers: {
      'Content-Type':'application/json',
    },
    body: JSON.stringify(ingredient)
  }


  const response = await fetch(url,options)

  if(response.ok) {
    return response.json()
  }

  const error = await response.json()

  throw new Error(error.body)
 
};

export const load = async () => {

  const response = await fetch(url)

  if(response.ok) {
    const body = await response.json()
    return body.Items
  }

};
