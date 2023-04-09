const books=[
    {
        ISBN:"12321BOOK",
        title:"Tesla!!!",
        pubDate:"2021-08-05",
        numPage:"342",
        language:"en",
        author:[1,2],
        publications:["tech","space","education"]
    }
]

const author=[
    {
        id:1,
        name:"manikanta",
        books:["12321Book","263736Book"]
    },
    {
        id:2,
        name:"ravi",
        books:["12321Book","2837262BOOK"]
    }
]

const publications=[
    {
        id:1,
        name:"writeR",
        books:["12321book"]
    }
]

module.exports={books,author,publications};