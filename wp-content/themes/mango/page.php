<?php
/*			
* page.php -정적 페이지 화면 담당
*
* @package theme-mango
*/
get_header();
the_post();
?>
<div class="page-wrapper">
	<div class="page-inner">
		<h1 class="page-title">
		<?php the_title();	?>
		</h1>
	</div>
	<div class="page-content">
	<?php  the_content(); ?>
	</div>

	<!-- 모든 컨텐츠 출력후 페이지네이션 링크 생성-->
	<div class="pagination">
		<?php wp_link_pages();	?>
	</div>			
	<div style="clear: both;"> </div>
	<!-- 댓글 허용된 글일경우 댓글 탬플릿 출력-->
	<?php  if(comments_open() ) comments_template(); ?>
</div>
	<?php  
		get_footer();				