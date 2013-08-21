<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class servicios extends CI_Controller {

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
	function servicios_implementacion()
	{
		$this->ViewBag['layout_title'] = "";
		$datos['home'] = false;
		$datos['urlBanner2'] = 'img/va-conmigo.png';
		$datos['descripcion'] =  '';
		$datos['content'] = 'servicios/servicios_implementacion';
		$this->load->view('layout', $datos);
	}
	
	function capacitacion()
	{
		$this->ViewBag['layout_title'] = "";
		$datos['home'] = false;
		$datos['urlBanner2'] = 'img/va-conmigo.png';
		$datos['descripcion'] =  '';
		$datos['content'] = 'servicios/capacitacion';
		$this->load->view('layout', $datos);
	}
	
	function integracion()
	{
		$this->ViewBag['layout_title'] = "";
		$datos['home'] = false;
		$datos['urlBanner2'] = 'img/va-conmigo.png';
		$datos['descripcion'] =  '';
		$datos['content'] = 'servicios/integracion';
		$this->load->view('layout', $datos);
	}
	
	function soporte()
	{
		$this->ViewBag['layout_title'] = "";
		$datos['home'] = false;
		$datos['urlBanner2'] = 'img/va-conmigo.png';
		$datos['descripcion'] =  '';
		$datos['content'] = 'servicios/soporte';
		$this->load->view('layout', $datos);
	}
	
}
/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */
?>