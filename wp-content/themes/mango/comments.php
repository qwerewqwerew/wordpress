<?php
/**
*	comments.php - 포스트/정적페이지 댓글 출력담당
*	@package theme-mango
**/
  if(post_password_required()){
	  return;
  }/*비밀번호 보호글일 경우 리턴*/
?>
<div id="comments" class="comments-area">
	<?php if(have_comments()):  ?>
	<h2 class="comments-title">
		<?php
			$comments_number=get_comments_number();
			printf('%d개의 댓글이 있습니다.',$comments_number);
		?><!-- 댓글이 있을경우 전체글갯수 출력-->
	</h2>
	<ol class="comment-list">
		<?php
			wp_list_comments(array(
				'style' =>'ol',
				'avatar_size' =>42,
			));
		?><!-- 댓글목록 출력-->
	</ol>
	<?php endif; ?>
	<?php comment_form();  ?><!-- 댓글 입력폼 출력-->
</div>