import posts from "./main.js"
let loadMoreBtn = document.querySelector('#load-more');

// ============================  CARD MAP SHOW  ================================

const postArticle = {
    state: {
        posts
    },

    // handleAddLike: (postId) => {
    //     const { state: { posts }, render, } = instgramApp;
    //     const postIndex = posts.findIndex((x) => x.id === postId);

    //     if (postIndex > -1) {
    //         posts[postIndex].likes = posts[postIndex].isLike
    //             ? posts[postIndex].likes - 1
    //             : posts[postIndex].likes + 1;
    //         posts[postIndex].isLike = !posts[postIndex].isLike;
    //         console.log({ posts });
    //         render();
    //     }
    // //     <div class="">
    // //     <p class="post-like ${post.isLike ? "liked" : ""}
    // //       "onclick="instgramApp.handleAddLike(${post.id})">
    // //       ${post.likes}${post.isLike ? "UnLike" : "Likes"}<p>
    // // </div class="div">
    // },
    //    <a href="#" class="btn">read more</a>\7

    myBlogsShow: (postId) => {
        console.log(postId, "hiii")
    },
    renderPost: (post) => {
        return `
         <div class="box">
            <div class="image">
               <img src="${post.imageUrl}" alt="blog images">
            </div>
            <div class="content">
               <h3>${post.title}</h3>
               <p>${post.caption}</p>
               <div>
               <button class="btn blogBtns">
               😍 Read article & Download
               </button>
               </div>
               <div class="icons">
                  <span> <i class="bx bx-calendar"></i> ${post.createdAt} </span>
                  <span> <i class="bx bx-heart"></i> ${post.username} </span>
               </div>
            </div>
         </div>
      `;
    },

    render: () => {
        const { state: { posts }, renderPost, } = postArticle;
        const root = document.querySelector(".box-container");
        root.innerHTML = posts.map((post) => renderPost(post)).join("");

        let btns = document.querySelectorAll(".blogBtns")
        btns.forEach((items) => {
            items.addEventListener("click", (id) => {
                const studentState = [...postArticle.state.posts];
                const index = studentState.findIndex(
                    (x) => x.id == studentState.id
                );
                console.log(index)
            })
        })
    },
};

postArticle.render();

// /=====================  SHOW MORE BUTTON  =================================
let currentItem = 9;

loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.container .box-container .box')];
    for (var i = currentItem; i < currentItem + 3; i++) {
        boxes[i].style.display = 'inline-block';
    }
    currentItem += 3;
    if (currentItem >= boxes.length) {
        loadMoreBtn.style.display = 'none';
    }

}
// ==========================
// function myFunction() {
//     var x = document.getElementById("myDIV");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }
// ===========================
// <span> <i class="bx bx-calendar"></i> 21st may, 2022 </span>
// <a href="#" class="btn"><i class='bx bx-downvote' ></i> Download</a>

// ========================================================
// const studentState = [...studentApp.state.students];
// const student = studentState.find((x) => x.id === id);

// if (student) {
//   studentApp.state.newStudent = student;
//   const previewContent = `
//       <div class= "previews">
//       <img src= ${student.image} >
//       <p>ID: ${student.id}</p>
//         <p>Name: ${student.firstName}</p>
//         <p>Class: ${student.class}</p>
//         <p>Gender: ${student.gender}</p>
//         <p>DOB: ${student.DOB}</p>
//         <p>Phone: ${student.Phone}</p>
//         <p>About: ${student.about}</p>
//       </div>
//   `;
//   // preview.style.border = `1px solid #eee`;
//   preview.innerHTML = previewContent;
// }