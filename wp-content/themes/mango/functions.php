<?php
/**
 * functions.php - 기능 구현을 담당하는 파일 입니다.
 *
 * @package theme-mango
 */


register_nav_menu( 'primary', '메인 메뉴' );
function mango_sidebar(){
	register_sidebar(array(
		'name' => '망고 사이드바',
		'id' => 'mango_sidebar',
		'description' => '망고 사이드바 입니다',
	));
}
add_action('widgets_init','mango_sidebar');

