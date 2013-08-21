<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class comunidad extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -  
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in 
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see http://codeigniter.com/user_guide/general/urls.html
	 */
	function white_papers()
	{
		$this->ViewBag['layout_title'] = "";
		$datos['home'] = false;
		$datos['urlBanner2'] = 'img/va-conmigo.png';
		$datos['descripcion'] =  '';
		$datos['content'] = 'comunidad/white_papers';
		$this->load->view('layout', $datos);
	}
	
	function va_conmigo()
	{
		$this->ViewBag['layout_title'] = "";
		$datos['home'] = false;
		$datos['urlBanner2'] = 'img/va-conmigo.png';
		$datos['descripcion'] =  '';
		$datos['content'] = 'comunidad/va_conmigo';
		$this->load->view('layout', $datos);
	}
	
	function sabias_que()
	{
		$this->ViewBag['layout_title'] = "";
		$datos['home'] = false;
		$datos['urlBanner2'] = 'img/va-conmigo.png';
		$datos['descripcion'] =  '';
		$datos['content'] = 'comunidad/sabias_que';
		$this->load->view('layout', $datos);
	}
	
	function redes_sociales()
	{
		$this->ViewBag['layout_title'] = "";
		$datos['home'] = false;
		$datos['urlBanner2'] = 'img/va-conmigo.png';
		$datos['descripcion'] =  '';
		$datos['content'] = 'comunidad/redes_sociales';
		$this->load->view('layout', $datos);
	}
	
}
/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */
?>