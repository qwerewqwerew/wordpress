<?php
/**
 * category.php - 카테고리 화면을 담당하는 파일입니다.
 * 
 * @package theme-mango
 */
get_header();
$cat_name = get_query_var( 'category_name' );
?>
<div class="page-wrapper">
  <div class="page-inner">
    <h1 class="page-title">
      <?php single_cat_title(); ?>
    </h1>
  </div><!-- .page-inner -->
  <div class="page-content catwrap-<?php echo $cat_name; ?>">
    <?php if ( have_posts() ) : ?>
      <?php while( have_posts() ) : the_post(); ?>
        <?php get_template_part( 'tmpl-category', $cat_name ); ?>
      <?php endwhile; ?>
      <p class="pagination">
		<?php 
			$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;

			$data= new WP_Query(array(
				'post_type'=>get_post_custom($post_id), // your post type name
				'posts_per_page' => 3, // post per page
				'paged' => $paged,
			));

			if($data->have_posts()) :
				while($data->have_posts())  : $data->the_post();
						// Your code
				endwhile;

				$total_pages = $data->max_num_pages;

				if ($total_pages > 1){

					$current_page = max(1, get_query_var('paged'));

					echo paginate_links(array(
						'base' => get_pagenum_link(1) . '%_%',
						'format' => '/page/%#%',
						'current' => $current_page,
						'total' => $total_pages,
						'prev_text'    => __('« prev'),
						'next_text'    => __('next »'),
					));
				}
				?>    
			<?php else :?>
			<h3><?php _e('페이지없음', ''); ?></h3>
			<?php endif; ?>			<?php wp_reset_postdata();?>

      </p>
    <?php else : ?>
      <?php get_template_part( 'tmpl-category', 'none' ); ?>
    <?php endif; ?>
  </div><!-- .page-content -->
</div><!-- .page-wrapper -->
<?php
get_footer();