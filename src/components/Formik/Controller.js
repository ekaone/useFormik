import axios from "axios";

const URL_user = "/user";
const URL_project = "/project";

export const getProjects = () => {
  return axios
    .get(URL_project, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return "Error data: " + err
    });
};

export const addProject = val => {
  return axios
    .post(
      URL_project,
      {
        id: val.projectId,
        name: val.projectName,
        value: val.projectValue,
        duration: val.projectDuration
      }
    )
    .then(res => {
      return res;
    })
    .catch(err => {
      return err
    });
};

// export const updateItem = form => {
//   return axios
//     .put(
//       URL + `/task/${form.id}`,
//       {
//         title: form.title,
//         description: form.description
//       }
//     )
//     .then(res => {
//       console.log(res);
//     })
//     .catch(err => {
//       console.log(err)
//     });
// };

// export const deleteItem = id => {
//   return axios
//     .delete(URL + `/task/${id}`, {
//       headers: { "Content-Type": "application/json" }
//     })
//     .then(res => {
//       console.log(res);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };
