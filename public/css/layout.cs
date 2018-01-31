@CHARSET "UTF-8";

/*------------------------------------Layout-----------------------------------------*/

body{
    margin: 0;
    background-color: #222121;
    min-width: 650px;
}
body, html {
    height: 100%;
}
header {
    width:100%;
}

header #title {
    height:130px;
    width:100%;
    background: #000000; 
}
header .menu {
    width:100%;
    height: auto;
    background: #e32727; 
}
main {
    width:100%;
    margin: 0 auto;
    font-family: arial;
    overflow: hidden;
    min-height: 100%;
    height: auto !important;
    height: 100%;
    margin-bottom: 50px;
}
footer{
    background:#000000;
    height:100px;
    clear:both;
    position:relative;
    bottom:0;
    width: 100%;
}

#title a {
    font-size: 50px;
    font-weight:bold;
    color:#ffffff;
    font-family: Verdana;
    float:left;
    text-decoration: none;
    height:auto;
    width:auto;
    margin:60px 0 0 40px ;
}

#title form{
    float:right;
    height:auto;
    width:auto;
    margin:60px 0 0 40px;
}
input#searchtxt {
    width:200px;
    margin:20px;
}
button#searchbtn{
    background: url('images/search.png') no-repeat;
    height:41px;
    width:41px;
    border:none;
}

.clearFix {
    clear:both;
}

.menuItem{
    float: left;
    font-weight:bold;
    font-size:25px;
    display: inline-block;
    min-width:120px;
    width: auto;
    margin: 10px 20px 10px;
    -moz-border-radius: 60px / 40px;
    -webkit-border-radius: 60px / 40px;
    border-radius: 60px / 40px;
    background:transparent;
    cursor:pointer;
}
.menu ul {
    display:block;
    max-width:1200px;
    margin:0 auto;
}

.menu a{
    margin: 10px 20px;
    text-decoration:none;
    font-size: 30px;
    color:#ffffff;
    font-family: Verdana;
    text-align: center;

}
.inline-list>li{
    display:inline-block;
    width:auto;
    margin:0 25px;
}
.inline-list{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
}


/*---------------------------------------End Layout-------------------------------------*/

article a{
    color:white;
    text-decoration: none;
    cursor:pointer;
}
#main-container{
    max-width: 1000px;
    margin: 0 auto;
}
#main-title{
    color:white;
    margin-top: 0;
    font-size: 350%;
    text-align:center;
}
.movie-container article{
    color:white;
}
article a:hover{
    color:#e32727;
    transition:color 0.4s ease-out;
}
section div{
    display:flex;
    width:50%;
}
.movie-container {
     float:left;
     margin-bottom:40px;
     min-width: 400px;
 }
#main-title{
    font-weight: bold;
    margin-top: 40px;
    margin-bottom: 40px;
}
.img-all-movies, article{
    flex:1;
    margin:5px;
}

.img-all-movies{
    margin:50px;
    height:100%;
    width:50%;
    transition:transform 0.5s ease-in;
}
.img-all-movies:hover{
    transform:scale(1.2);
}
.movie-titles-all-movies{
    font-size: 26px;
    font-weight: bold;
    min-height: 70px;
}
.rating {
    unicode-bidi: bidi-override;
    direction: rtl;
    color: white;
    margin-top:20px;
    margin-bottom:30px;
}
.rating > span {
    display: inline-block;
    position: relative;
    width: 1.1em;
}
.rating > span:hover:before,
.rating > span:hover ~ span:before {
    content: "\2605";
    position: absolute;
    cursor:pointer;
}
input[type="button"]{
    min-width: 140px;
    height: 40px;
    text-transform:uppercase;
    cursor:pointer;
    border-radius:44px;
    border-color:#fff;
    border-style:solid;
    background-color:#222121;
    color:white;
    font-weight: bold;
}
input[type="button"]:hover{
    background:#e32727;
    transition:background 0.4s ease-out;
    border:none;
}
.movie-summary {
    display: inline-block;
    width: 100%;
    height: 295px;
    overflow: hidden;
}
.movie-description{
    display: block;
    width:100%;
}
.main-movie-info{
    color:white;
}
.movie{
    position:relative;
}

.single-movie-left {
    width: 490px;
    float: left;
    display: inline-block;
}

.single-movie-left .img-all-movies {
    width: 400px;
    margin: 0px ;
    padding: 10%;
    position: relative;
}

.single-movie-left .rating {
    color: white;
    margin: 20px 0px 20px 200px;
    display: inline;
    position: relative;
    direction: rtl;
}

#image {
    height: 600px;
    width:100%;
    cursor:default;
}

#more {
    position:absolute;
    top:60%;
    left:45%;
    width:140px;
    height: 80px;
    -moz-border-radius: 50px / 30px;
    -webkit-border-radius: 50px / 30px;
    border-radius: 50px / 30px;
    border-color:#ffffff;
    border-width: 3px;
    background-color: transparent;
    cursor:pointer;
    color:white;
    font-weight:bold;
    font-size:20px;
}

.moreMovies {
    width:100%;
    height:auto;
    margin: 0;
}

.moreMovies header {
    display:flex;
    justify-content: center;
    width:100%;
    height:auto;
    margin: 30px 0;
    font-size: 40px;
}

.moreMovies {
    width: 100%;
    height: auto;
    color: #ffffff;
    font-weight:bold;
    margin: 40px 0;
    text-align: center;
}

.gallery {
    margin: 0;
    width: 100%;
    min-height:350px;
    height: auto;
    justify-content: center;
}

.galleryContent{
    height:	300px;
    width:30%;
    margin:1%;
    position: relative;
    min-width:400px;
    display: inline-block;

}

.imgBox {
    height: 85%;
    width:100%;
}
.imgBox img{
    transition:transform 0.5s ease-in;
}
.imgBox img:hover{
    transform:scale(1.2);
}
.galleryContent a {
    text-decoration: none;
    color: #ffffff;
    font-weight: bold;
    font-size: 26px;
    margin: 100px 0;
}
.galleryContent a:hover{
    color:#e32727;
    transition:color 0.4s ease-out;
}
.galleryContent footer {
    color:#aea6a6;
    font-size:20px;
    margin:2% 45%;
    width:10%;
    background:none;
}


.movieGallery {
    height:100%;
    width:100%;
}