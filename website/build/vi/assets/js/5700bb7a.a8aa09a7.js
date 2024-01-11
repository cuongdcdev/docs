"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2875],{60845:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>r});var s=n(85893),a=n(11151);const i={id:"context-object",title:"QueryAPI Context object",sidebar_label:"Context object"},o=void 0,l={id:"bos/queryapi/context-object",title:"QueryAPI Context object",description:"Overview",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/bos/queryapi/context.md",sourceDirName:"bos/queryapi",slug:"/bos/queryapi/context-object",permalink:"/vi/bos/queryapi/context-object",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/bos/queryapi/context.md",tags:[],version:"current",frontMatter:{id:"context-object",title:"QueryAPI Context object",sidebar_label:"Context object"},sidebar:"indexers",previous:{title:"Indexing Functions",permalink:"/vi/bos/queryapi/index-functions"},next:{title:"Access & Query Historical data",permalink:"/vi/bos/queryapi/query-data"}},c={},r=[{value:"Overview",id:"overview",level:2},{value:"Main Methods",id:"main-methods",level:2},{value:"GraphQL",id:"graphql",level:3},{value:"Input",id:"input",level:4},{value:"Example",id:"example",level:4},{value:"Set",id:"set",level:3},{value:"Input",id:"input-1",level:4},{value:"Example",id:"example-1",level:4},{value:"Log",id:"log",level:3},{value:"DB",id:"db",level:2},{value:"DB Methods",id:"db-methods",level:3},{value:"Methods",id:"methods",level:3},{value:"Insert",id:"insert",level:3},{value:"Input",id:"input-2",level:4},{value:"Example",id:"example-2",level:4},{value:"Select",id:"select",level:3},{value:"Input",id:"input-3",level:4},{value:"Example",id:"example-3",level:4},{value:"Update",id:"update",level:3},{value:"Input",id:"input-4",level:4},{value:"Example",id:"example-4",level:4},{value:"Upsert",id:"upsert",level:3},{value:"Input",id:"input-5",level:4},{value:"Example",id:"example-5",level:4},{value:"Delete",id:"delete",level:3},{value:"Input",id:"input-6",level:4},{value:"Example",id:"example-6",level:4},{value:"Auto Complete",id:"auto-complete",level:3},{value:"Compatibility",id:"compatibility",level:4},{value:"Examples",id:"examples",level:4}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"context"})," object is a global object made available to developers building indexers with ",(0,s.jsx)(t.a,{href:"/vi/bos/queryapi/intro",children:"QueryAPI"}),". It provides helper methods to interact with the resources spun up alongside the indexers, such as the GraphQL Endpoint and the database. There are also helper methods to allow specific API calls."]}),"\n",(0,s.jsx)(t.admonition,{title:"Under development",type:"caution",children:(0,s.jsxs)(t.p,{children:["The formatting and changes in this document are still in progress. These changes are not fully featured yet but will be by the time they hit production. Specifically, ",(0,s.jsx)(t.a,{href:"#auto-complete",children:"auto-complete"})," and the ",(0,s.jsx)(t.code,{children:"context.db.TableName.methodName"})," format."]})}),"\n",(0,s.jsx)(t.h2,{id:"main-methods",children:"Main Methods"}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["All methods are asynchronous, hence why all examples have the ",(0,s.jsx)(t.code,{children:"await"})," keyword in front of the function call."]})}),"\n",(0,s.jsx)(t.h3,{id:"graphql",children:"GraphQL"}),"\n",(0,s.jsxs)(t.p,{children:["When an indexer is published, the SQL DDL written under the ",(0,s.jsx)(t.code,{children:"schema.sql"})," tab is used to spin up a Postgres database. This DB is integrated with Hasura to provide a GraphQL endpoint. This endpoint can be used to interact with your database. Making calls to the Hasura GraphQL endpoint requires an API call, which is restricted in the environment. So, the GraphQL method allows calls to the endpoint related to the indexer."]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["The GraphQL method was previously the only way to interact with the database. Now, the ",(0,s.jsx)(t.a,{href:"#db",children:"DB methods"})," provide a more accessible functionality. The GraphQL method is better suited for more complex queries and mutations. Also, more information about GraphQL calls can be ",(0,s.jsx)(t.a,{href:"https://graphql.org/learn/queries/",children:"found here"}),"."]})}),"\n",(0,s.jsx)(t.h4,{id:"input",children:"Input"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"await context.graphql(operation, variables) \n"})}),"\n",(0,s.jsx)(t.p,{children:"The operation is a string formatted to match a GraphQL query. The variables are any data objects used in the query."}),"\n",(0,s.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"const mutationData = {\n  post: {\n    account_id: accountId,\n    block_height: blockHeight,\n    block_timestamp: blockTimestamp,\n    content: content,\n    receipt_id: receiptId,\n  },\n};\n\n\n// Call GraphQL mutation to insert a new post\nawait context.graphql(\n  `mutation createPost($post: dataplatform_near_social_feed_posts_insert_input!){\n    insert_dataplatform_near_social_feed_posts_one(\n    object: $post\n    ) {\n      account_id\n      block_height\n    }\n  }`,\n  mutationData\n);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The above is a snippet from the social feed indexer. In this example, you have a mutation (which mutates or changes data in the database, instead of a query that merely reads) called ",(0,s.jsx)(t.code,{children:"createPost"}),". The mutation name can be anything. You specify a variable ",(0,s.jsx)(t.code,{children:"post"})," and execute a graphQL method, which inserts the ",(0,s.jsx)(t.code,{children:"post"})," object and returns ",(0,s.jsx)(t.code,{children:"account_id"})," and ",(0,s.jsx)(t.code,{children:"block_height"})," from the newly inserted object. Finally, you pass in ",(0,s.jsx)(t.code,{children:"mutationData"})," as the variable, which is automatically linked to ",(0,s.jsx)(t.code,{children:"post"})," since it's the only field."]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["You can find other examples of ",(0,s.jsx)(t.code,{children:"context.graphql"})," in the ",(0,s.jsx)(t.a,{href:"/vi/bos/tutorial/indexer-tutorials/feed-indexer",children:"social_feed indexers"}),"."]})}),"\n",(0,s.jsx)(t.h3,{id:"set",children:"Set"}),"\n",(0,s.jsxs)(t.p,{children:["Each indexer, by default, has a table called ",(0,s.jsx)(t.code,{children:"indexer_storage"}),". It has a field for ",(0,s.jsx)(t.code,{children:"key"})," and ",(0,s.jsx)(t.code,{children:"value"}),", functioning like a key-value store. This table can, of course, be removed from the DDL before publishing. However, it kept the ",(0,s.jsx)(t.code,{children:"set"})," method as an easy way to set some value for a key in that table. This method is used in the default code to set the ",(0,s.jsx)(t.code,{children:"height"})," on each invocation."]}),"\n",(0,s.jsx)(t.h4,{id:"input-1",children:"Input"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"await context.set(key, value)\n"})}),"\n",(0,s.jsx)(t.h4,{id:"example-1",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'const h = block.header().height;\nawait context.set("height", h);\n'})}),"\n",(0,s.jsx)(t.h3,{id:"log",children:"Log"}),"\n",(0,s.jsxs)(t.p,{children:["Your indexing code is executed on a cloud compute instance. Therefore, things like ",(0,s.jsx)(t.code,{children:"console.log"})," are surfaced to the machine itself. To surface ",(0,s.jsx)(t.code,{children:"console.log"})," statements not only to the machine but also back to you under ",(0,s.jsx)(t.em,{children:"Indexer Status"}),", QueryAPI needs to write these logs to the logging table, which is separate from the developer's schema. This ",(0,s.jsx)(t.a,{href:"/vi/bos/queryapi/how-it-works",children:"happens in the runner"}),", and QueryAPI maps ",(0,s.jsx)(t.code,{children:"console.log"})," statements in the developer's code to call this function instead, so you can simply use ",(0,s.jsx)(t.code,{children:"console.log"}),", and QueryAPI takes care of the rest."]}),"\n",(0,s.jsx)(t.h2,{id:"db",children:"DB"}),"\n",(0,s.jsxs)(t.p,{children:["The DB object is a sub-object under ",(0,s.jsx)(t.code,{children:"context"}),". It is accessed through ",(0,s.jsx)(t.code,{children:"context.db"}),". Previously, the GraphQL method was the only way to interact with the database. However, writing GraphQL queries and mutations is pretty complicated and overkill for simple interactions. So, simpler interactions are instead made available through the ",(0,s.jsx)(t.code,{children:"db"})," sub-object. This object is built by reading your schema, parsing its information, and generating methods for each table. See below for what methods are generated for each table. The format to access the below methods is as follows: ",(0,s.jsx)(t.code,{children:"context.db.[tableName].[methodName]"}),". Concrete examples are also given below."]}),"\n",(0,s.jsx)(t.admonition,{title:"Note",type:"info",children:(0,s.jsxs)(t.p,{children:["One thing to note is that the process where the code is read is not fully featured. If an ",(0,s.jsx)(t.code,{children:"ALTER TABLE ALTER COLUMN"})," statement is used in the SQL schema, for example, it will fail to parse. Should this failure occur, the context object will still be generated but ",(0,s.jsx)(t.code,{children:"db"})," methods will be unavailable. An error will appear on the page saying ",(0,s.jsx)(t.code,{children:"types could not be generated"}),". A more detailed error can be viewed in the browser's console."]})}),"\n",(0,s.jsx)(t.h3,{id:"db-methods",children:"DB Methods"}),"\n",(0,s.jsx)(t.p,{children:"These DB methods are generated when the schema is read. The tables in the schema are parsed, and methods are set under each table name. This makes using the object more intuitive and declarative."}),"\n",(0,s.jsx)(t.p,{children:"If the schema is invalid for generating types, then an error will pop up both on screen and in the console. Here's an example:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"auto complete",src:n(18025).Z+"",width:"1660",height:"546"})}),"\n",(0,s.jsx)(t.h3,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Except for ",(0,s.jsx)(t.a,{href:"#upsert",children:"upsert"}),", all of the below methods are used in ",(0,s.jsx)(t.a,{href:"https://near.org/dev-queryapi.dataplatform.near/widget/QueryApi.App?selectedIndexerPath=darunrs.near/social_feed_test",children:"social_feed_test indexer"}),". However, keep in mind the current code uses the outdated call structure. An upcoming change will switch to the new method of ",(0,s.jsx)(t.code,{children:"context.db.TableName.methodName"})," instead of ",(0,s.jsx)(t.code,{children:"context.db.methodName_tableName"}),"."]})}),"\n",(0,s.jsx)(t.h3,{id:"insert",children:"Insert"}),"\n",(0,s.jsx)(t.p,{children:"This method allows inserting one or more objects into the table preceding the method call. The inserted objects are then returned back with all of their information. Later on, we may implement returning specific fields but for now, we are returning them all. This goes for all methods."}),"\n",(0,s.jsx)(t.h4,{id:"input-2",children:"Input"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"await context.db.TableName.insert(objects)\n"})}),"\n",(0,s.jsx)(t.p,{children:"Objects can be a single object or an array of them."}),"\n",(0,s.jsx)(t.h4,{id:"example-2",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"const insertPostData = {\n  account_id: accountId,\n  block_height: blockHeight,\n  block_timestamp: blockTimestamp,\n  content: content,\n  receipt_id: receiptId\n};\n// Insert new post to Posts table\nawait context.db.Posts.insert(insertPostData);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["In this example, you insert a single object. But, if you want to insert multiple objects, then you just pass in an array with multiple objects. Such as ",(0,s.jsx)(t.code,{children:"[ insertPostDataA, insertPostDataB ]"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"select",children:"Select"}),"\n",(0,s.jsxs)(t.p,{children:["This method returns rows that match the criteria included in the call. For now, QueryAPI only supports explicit matches. For example, providing ",(0,s.jsx)(t.code,{children:"{ colA: valueA, colB: valueB }"})," means that rows where ",(0,s.jsx)(t.code,{children:"colA"})," and ",(0,s.jsx)(t.code,{children:"colB"})," match those ",(0,s.jsx)(t.strong,{children:"EXACT"})," values will be returned."]}),"\n",(0,s.jsxs)(t.p,{children:["There is also a ",(0,s.jsx)(t.code,{children:"limit"})," parameter which specifies the maximum amount of objects to get. There are no guarantees on ordering. If there are 10 and the limit is 5, any of them might be returned."]}),"\n",(0,s.jsx)(t.h4,{id:"input-3",children:"Input"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"await context.db.TableName.select(fieldsToMatch, limit = null)\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"fieldsToMatch"})," is an object that contains ",(0,s.jsx)(t.code,{children:"column names: value"}),", where the value will need to be an exact match for that column. The ",(0,s.jsx)(t.code,{children:"limit"})," parameter defaults to ",(0,s.jsx)(t.code,{children:"null"}),", which means no limit. If a value is provided, it overrides the ",(0,s.jsx)(t.code,{children:"null"})," value and is set to whatever was passed in. All matching rows up to the limit are returned."]}),"\n",(0,s.jsx)(t.h4,{id:"example-3",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"const posts = await context.db.Posts.select(\n  {\n    account_id: postAuthor,\n    block_height: postBlockHeight\n  },\n  1\n);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["In this example, any rows in the ",(0,s.jsx)(t.code,{children:"posts"})," table where the ",(0,s.jsx)(t.code,{children:"account_id"})," column value matches ",(0,s.jsx)(t.code,{children:"postAuthor"})," ",(0,s.jsx)(t.strong,{children:"AND"})," ",(0,s.jsx)(t.code,{children:"block_height"})," matches ",(0,s.jsx)(t.code,{children:"postBlockheight"})," will be returned."]}),"\n",(0,s.jsx)(t.h3,{id:"update",children:"Update"}),"\n",(0,s.jsxs)(t.p,{children:["This method updates all rows that match the ",(0,s.jsx)(t.code,{children:"whereObj"})," values by setting the ",(0,s.jsx)(t.code,{children:"updateObj"})," values. It then returns all impacted rows. The ",(0,s.jsx)(t.code,{children:"whereObj"})," is subject to the same restrictions as the select\u2019s ",(0,s.jsx)(t.code,{children:"whereObj"}),"."]}),"\n",(0,s.jsx)(t.h4,{id:"input-4",children:"Input"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"await context.db.TableName.update(whereObj, updateObj)\n"})}),"\n",(0,s.jsx)(t.h4,{id:"example-4",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"await context.db.Posts.update(\n  {id: post.id}, \n  {last_comment_timestamp: currentTimestamp});\n"})}),"\n",(0,s.jsxs)(t.p,{children:["In this example, any rows in the ",(0,s.jsx)(t.code,{children:"posts"})," table where the ",(0,s.jsx)(t.code,{children:"id"})," column matches the value ",(0,s.jsx)(t.code,{children:"post.id"})," will have their ",(0,s.jsx)(t.code,{children:"last_comment_timestamp"})," column value overwritten to the value of ",(0,s.jsx)(t.code,{children:"currentTimestamp"}),". All impacted rows are then returned."]}),"\n",(0,s.jsx)(t.h3,{id:"upsert",children:"Upsert"}),"\n",(0,s.jsxs)(t.p,{children:["Upsert is a combination of insert and update. First, the insert operation is performed. However, if the object already exists, the update portion is called instead. As a result, the input to the function are objects to be inserted, a ",(0,s.jsx)(t.code,{children:"conflictColumns"})," object, which specifies which column values must conflict for the update operation to occur, and an ",(0,s.jsx)(t.code,{children:"updateColumns"})," which specifies which columns have their values overwritten by the incoming object\u2019s values. The ",(0,s.jsx)(t.code,{children:"conflictColumns"})," and ",(0,s.jsx)(t.code,{children:"updateColumns"})," parameters are both arrays. As usual, all impacted rows are returned."]}),"\n",(0,s.jsx)(t.h4,{id:"input-5",children:"Input"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"await context.db.upsert(objects, conflictColumns, updateColumns)\n"})}),"\n",(0,s.jsx)(t.p,{children:"The Objects parameter is either one or an array of objects. The other two parameters are arrays of strings. The strings should correspond to column names for that table."}),"\n",(0,s.jsx)(t.h4,{id:"example-5",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"const insertPostDataA = {\n  id: postId\n  account_id: accountIdA,\n  block_height: blockHeightA,\n  block_timestamp: blockTimeStampA\n};\n\n\nconst insertPostDataB = {\n  id: postId\n  account_id: accountIdB,\n  block_height: blockHeightB,\n  block_timestamp: blockTimeStampB\n};\n// Insert new post to Posts table\nawait context.db.Posts.upsert(\n  [ insertPostDataA, insertPostDataB ], \n  [\u2018account_id\u2019, \u2018id\u2019], \n  [\u2018block_height\u2019, \u2018block_timestamp\u2019);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["In this example, two objects are being inserted. However, if a row already exists in the table where the ",(0,s.jsx)(t.code,{children:"account_id"})," and ",(0,s.jsx)(t.code,{children:"id"})," are the same, then ",(0,s.jsx)(t.code,{children:"block_height"})," and ",(0,s.jsx)(t.code,{children:"block_timestamp"})," would be overwritten in those rows to the value in the object in the call which is conflicting."]}),"\n",(0,s.jsx)(t.h3,{id:"delete",children:"Delete"}),"\n",(0,s.jsxs)(t.p,{children:["This method deletes all objects in the row that match the object passed in. Caution should be taken when using this method. It currently only supports ",(0,s.jsx)(t.strong,{children:"AND"})," and exact match, just like in the ",(0,s.jsx)(t.a,{href:"#select",children:"select method"}),". That doubles as a safety measure against accidentally deleting a bunch of data. All deleted rows are returned so you can always insert them back if you get back more rows than expected. (Or reindex your indexer if needed)"]}),"\n",(0,s.jsx)(t.h4,{id:"input-6",children:"Input"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"await context.db.TableName.delete(whereObj)\n"})}),"\n",(0,s.jsx)(t.p,{children:"As stated, only a single object is allowed."}),"\n",(0,s.jsx)(t.h4,{id:"example-6",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"await context.db.delete_post_likes(\n  { \n    account_id: likeAuthorAccountId, \n    post_id: postId\n  }\n);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["In this example, any rows where ",(0,s.jsx)(t.code,{children:"account_id"})," and ",(0,s.jsx)(t.code,{children:"post_id"})," match the supplied value are deleted. All deleted rows are returned."]}),"\n",(0,s.jsx)(t.h3,{id:"auto-complete",children:"Auto Complete"}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"Autocomplete works while writing the schema and before publishing to the chain. In other words, you don't need to publish the indexer to get autocomplete."})}),"\n",(0,s.jsxs)(t.p,{children:["As mentioned, the ",(0,s.jsx)(t.a,{href:"#db-methods",children:"DB methods"})," are generated when the schema is read. In addition to that, TypeScript types are generated which represent the table itself. These types are set as the parameter types. This provides autocomplete and strong typing in the IDE. These restrictions are not enforced on the runner side and are instead mainly as a suggestion to help guide the developer to use the methods in a way that is deemed correct by QueryAPI."]}),"\n",(0,s.jsxs)(t.admonition,{title:"Types",type:"info",children:[(0,s.jsxs)(t.p,{children:["You can also generate types manually. Clicking the ",(0,s.jsx)(t.code,{children:"<>"})," button generates the types. It can be useful for debugging and iterative development while writing the schema."]}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"auto complete",src:n(49954).Z+"",width:"520",height:"180"})})]}),"\n",(0,s.jsx)(t.h4,{id:"compatibility",children:"Compatibility"}),"\n",(0,s.jsxs)(t.p,{children:["By default, current indexers have a ",(0,s.jsx)(t.code,{children:"context"})," object included as a parameter in the top-level ",(0,s.jsx)(t.code,{children:"async function getBlock"}),". This prevents autocomplete, as the local ",(0,s.jsx)(t.code,{children:"context"})," object shadows the global one, preventing access to it. Users need to manually remove the ",(0,s.jsx)(t.code,{children:"context"})," parameter from their indexers to get the autocomplete feature. For example:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"async function getBlock(block: Block, context) {\n"})}),"\n",(0,s.jsx)(t.p,{children:"should become"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"async function getBlock(block: Block) {\n"})}),"\n",(0,s.jsx)(t.h4,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.p,{children:"Here are some screenshots that demonstrate autocomplete on methods, strong typing, and field names:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"auto complete",src:n(27497).Z+"",width:"1120",height:"192"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"auto complete",src:n(19232).Z+"",width:"1204",height:"272"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"auto complete",src:n(93607).Z+"",width:"1560",height:"316"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"auto complete",src:n(56296).Z+"",width:"948",height:"198"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"auto complete",src:n(1665).Z+"",width:"1620",height:"554"})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},18025:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/autocomp-error-0dc760bcf642fe8fc0f54c4401ffc2bb.png"},49954:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/autocomp-types-3c8443a1060992637140e6a56d9351d2.png"},27497:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/autocomp1-db677672c8d5d7cfac2bf21f7279d2c1.jpg"},19232:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/autocomp2-8607b94753e17be3bce8b5dda50c1730.jpg"},93607:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/autocomp3-6e6dd35548286af9d8e16916f477083c.jpg"},56296:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/autocomp4-a6d10f2ad2569b556b234f76eb86e4f1.jpg"},1665:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/autocomp5-5b76aa77b7c4c33c451bf30adaf5358f.jpg"},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var s=n(67294);const a={},i=s.createContext(a);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);