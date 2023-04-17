<?php

namespace App\Controller;

use App\Entity\Test;
use App\Repository\TestRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('database', name: 'database_')]
class databaseController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(TestRepository $repository): Response
    {
        $tests = $repository->findAll();

        return $this->render('database/index.html.twig', [
            'tests' => $tests,
        ]);
    }

    #[Route('/add', name: 'add')]
    public function add(TestRepository $testRepository): Response
    {
        $test = new Test();
        $test->setTest('test');
        try {
            $testRepository->save($test, true);
            return $this->redirectToRoute('database_index');
        } catch (\Exception $e) {
            return new Response($e->getMessage());
        }
    }

}
