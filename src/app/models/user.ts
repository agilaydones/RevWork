export interface User {
  id: number,
  email: String,
  password: String
  playlistId: String,
}

export interface Users{
  user: Object
}

export interface Users2{
  Users1 : User[]
}



export interface playlist{
  
  playlist: Object
  
}

export interface UserP{
  id: number,
  email: String,
  password: String,
  playlist: Object[]
}

// { 
//   "id": 1050,
//   "playlist":[
//     {
//       "id":"ef3r4w"
//     },
//     {"id":"EWAF57"}
//   ]
// }