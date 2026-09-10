const KEY="rakib_demo_users_v1";
const DEFAULT_USERS=[
  {id:1,name:"Rakib Demo User",email:"user@demo.local",status:"Active",balance:1250},
  {id:2,name:"Demo Customer",email:"customer@demo.local",status:"Pending",balance:500}
];
function getUsers(){try{return JSON.parse(localStorage.getItem(KEY))||DEFAULT_USERS}catch(e){return DEFAULT_USERS}}
function saveUsers(users){localStorage.setItem(KEY,JSON.stringify(users))}
function resetDemo(){saveUsers(DEFAULT_USERS); location.reload()}
function money(n){return "৳"+Number(n).toLocaleString("en-US")}
