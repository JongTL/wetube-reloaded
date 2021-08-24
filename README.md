URL design

/ -> home
/join -> Join
/login -> Login
/search -> Search

/edit-user -> Edit user ==> /users/edit
/delete-user -> Delete user ===>/users/delete

/watch-video -> "" ===> /videos/watch
/edit-video -> ""===> /videos/edit
/delete-video

최고의 방법은 아니다. ===> 이게 낫다.

#4.6 플랜
/ -> home
/join
/login
/search

/users/:id -> see user profile
/users/edit
/users/delete
/users/logout

/videos/:id -> 동영상의 아이디
/videos/:id/edit
/videos/:id/delete
/videos/upload
