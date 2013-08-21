<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class en_mi_rol extends CI_Controller {

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
	function ejecutivo_atraccion_talento()
	{
		$this->ViewBag['layout_title'] = "Ejecutivo de atracción de talento";
		$datos['home'] = false;
		$datos['urlBanner2'] = 'img/banners/banner9.jpg';
		$datos['descripcion'] =  '';
		$datos['content'] = 'en_mi_rol/ejecutivo_atraccion_talento';
		$this->load->view('layout', $datos);
	}
	
	function ejecutivo_desarrollo_organizacional()
	{
		$this->ViewBag['layout_title'] = "Ejecutivo de desarrollo organizacional";
		$datos['home'] = false;
		$datos['urlBanner2'] = 'img/banners/banner9.jpg';
		$datos['descripcion'] =  '';
		$datos['content'] = 'en_mi_rol/ejecutivo_desarrollo_organizacional';
		$this->load->view('layout', $datos);
	}
	
	function gerente_capital_humano()
	{
		$this->ViewBag['layout_title'] = "Gerente de capital humano";
		$datos['home'] = false;
		$datos['urlBanner2'] = 'img/banners/banner8.jpg';
		$datos['descripcion'] =  '';
		$datos['content'] = 'en_mi_rol/gerente_capital_humano';
		$this->load->view('layout', $datos);
	}
	
	function consultoria_tercerizacion()
	{
		$this->ViewBag['layout_title'] = "Consultoría y tercerización";
		$datos['home'] = false;
		$datos['urlBanner2'] = 'img/banners/banner6.jpg';
		$datos['descripcion'] =  '';
		$datos['content'] = 'en_mi_rol/consultoria_tercerizacion';
		$this->load->view('layout', $datos);
	}
	
	function direccion()
	{
		$this->ViewBag['layout_title'] = "Dirección";
		$datos['home'] = false;
		$datos['urlBanner2'] = 'img/banners/banner11.jpg';
		$datos['descripcion'] =  '';
		$datos['content'] = 'en_mi_rol/direccion';
		$this->load->view('layout', $datos);
	}
	
	function propietario()
	{
		$this->ViewBag['layout_title'] = "Propietario";
		$datos['home'] = false;
		$datos['urlBanner2'] = 'img/banners/banner11.jpg';
		$datos['descripcion'] =  '';
		$datos['content'] = 'en_mi_rol/propietario';
		$this->load->view('layout', $datos);
	}
	
	function sistema_instalado()
	{
		$this->ViewBag['layout_title'] = "Tengo un sistema instalado";
		$datos['home'] = false;
		$datos['urlBanner2'] = 'img/banners/banner13.jpg';
		$datos['descripcion'] =  '';
		$datos['content'] = 'en_mi_rol/sistema_instalado';
		$this->load->view('layout', $datos);
	}
}
/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */
?>