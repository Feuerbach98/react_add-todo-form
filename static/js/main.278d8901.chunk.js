(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),s=a.n(i),o=a(10),l=a(3),c=a(4),m=a(6),u=a(5),d=a(7),h=(a(16),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]),p=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],b=function(e){var t=e.name;return r.a.createElement("div",null,"Name: ".concat(t))},g=a(1),y=a.n(g),f=y.a.shape({id:y.a.number.isRequired,name:y.a.string.isRequired}).isRequired,v=(y.a.shape({title:y.a.string.isRequired,completed:y.a.bool.isRequired,id:y.a.number.isRequired,user:f}).isRequired,function(e){var t=e.title,a=e.completed,n=e.user;return r.a.createElement("div",{className:"list-group-item"},r.a.createElement("h3",null,"Task: ",t),r.a.createElement("div",null,r.a.createElement(b,n),a?r.a.createElement("div",{className:"alert alert-success mt-3"},"Completed"):r.a.createElement("div",{className:"alert alert-danger mt-3"},"Not completed")))}),E=function(e){var t=e.todos;return r.a.createElement("div",{className:"list-group m-3"},t.map((function(e){return r.a.createElement(v,Object.assign({key:e.id},e))})))},N=a(2),S=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={title:"",userName:"",titleError:!1,userNameError:!1},e.handleChange=function(t){var a,n=t.target,r=n.name,i=n.value,s=n.type;e.setState((a={},Object(N.a)(a,r,"text"===s?i.replace(/[^\w ]+/,""):i),Object(N.a)(a,"".concat(r,"Error"),!1),a))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.title,r=a.userName,i=e.props,s=i.addTodo,o=i.users;if(n.trim()||e.setState({titleError:!0}),"Choose a user"!==r&&r||e.setState({userNameError:!0}),n.trim()&&r){var l=o.find((function(e){return e.name===r}));e.setState({title:"",userName:""}),s(n,l)}},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.users,t=this.state,a=t.title,n=t.userName,i=t.titleError,s=t.userNameError;return r.a.createElement("form",{className:"m-3",onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"title"},"Enter the title:"),r.a.createElement("input",{name:"title",id:"title",placeholder:"Task",type:"text",value:a,onChange:this.handleChange,className:"form-control"}),i&&r.a.createElement("span",{className:"alert alert-danger"},"Please enter the title"),r.a.createElement("label",{className:"mt-3",htmlFor:"userName"},"Choose a user:"),r.a.createElement("select",{name:"userName",id:"userName",value:n,onChange:this.handleChange,className:"custom-select"},r.a.createElement("option",null,"Choose a user"),e.map((function(e){return r.a.createElement("option",{key:e.id,value:e.name},e.name)}))),s&&r.a.createElement("span",{className:"alert alert-danger"},"Please choose a user"),r.a.createElement("button",{type:"submit",className:"btn btn-primary mt-3"},"Add"))}}]),a}(r.a.PureComponent),w=p.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{user:h.find((function(t){return t.id===e.userId}))})})),C=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={todos:w},e.addTodo=function(t,a){e.setState((function(e){var n={userId:a.id,id:e.todos.length+1,title:t,completed:!1,user:a};return{todos:[].concat(Object(o.a)(e.todos),[n])}}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.todos;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Add todo form"),r.a.createElement("div",{className:"d-flex"},r.a.createElement(E,{todos:e}),r.a.createElement(S,{users:h,addTodo:this.addTodo})))}}]),a}(r.a.PureComponent);s.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.278d8901.chunk.js.map