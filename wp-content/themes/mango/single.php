<?php
/**
*	single.php - 포스트 글 화면 담당
*	@package theme-mango
**/
get_header();
the_post();
?>

<div class="page-wrapper">
	<div class="page-inner">
		<h1 class="pate-title"><?php the_title(); ?></h1>
	</div>
	<div class="pate-content">
		<?php the_content(); ?>
	</div>
	<div class="page-footer"><span class="post-date">On<?php the_date(); ?></span><span class="post-author">By<?php the_author();  ?></span></div>
	<div class="pagination"><?php wp_link_pages(); ?></div>
	<div class="post-nav"><span class="post-link-prev"><?php previous_post_link('&laquo; %link', '%title',true );  ?></span>
	<span class="post-link-next"><?php next_post_link('%link &raquo;', '%title' , true);  ?></span>
	</div>
	<div style="clear:both;"></div>
	<?php if(comments_open()) comments_template();  ?>
</div>
<?php
get_footer();