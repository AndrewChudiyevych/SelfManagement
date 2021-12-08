export const getAllNote = async() => {
      const responce = fetch('https://api-note-manager.herokuapp.com/v1/notes?user=61b0741e9ee4f8499a70a491', {
              method: 'GET',
              headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0QGdtYWlsLmNvbSIsImlhdCI6MTYzODk1NDA0NSwiZXhwIjoxNjM5MDQxMDQ1fQ.MR9scvL9Wt1QuLlzRje8XmlEV2NCwCC5MfxXwf_kp8YGvVFHwjUEC-lJ65FWcXS-nro65Ff47tXsqOVUp7CyNA'
              }

          }).then((resp) => { return resp.json()}).catch((err) => { return err})
          console.log(responce);
          console.log(check);
          const check = await responce;
          return check;
  };