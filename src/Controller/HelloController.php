<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('', name: 'hello_')]
class HelloController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(): Response
    {
        return $this->render('hello/index.html.twig');
    }
    #[Route('/message', name: 'message')]
    public function message(): Response
    {
        return $this->render('messages/example_message.html.twig');
    }
    #[Route('/stimulus', name: 'stimulus')]
    public function stimulus(): Response
    {
        return $this->render('hello/stimulus.html.twig');
    }

}
