<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Symfony\Component\DomCrawler\Crawler;
use Symfony\Component\HttpClient\HttpClient;
use App\Models\ServerStatusModel;

class ScrappingCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:scrapping';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Realizar scrapping de la pagina de lodestone';

    /**
     * Execute the console command.
     */
    public function handle()
    {

        /**
         * Borrar la tabla antes de insertar los datos
         */
        \DB::table('server_status_models')->truncate();

        $client = HttpClient::create();
        $response = $client->request('GET', 'https://na.finalfantasyxiv.com/lodestone/news/category/2?page=1');

        $crawler = new Crawler($response->getContent());

        $crawler->filter('.news__list')->each(function ($tag) {
            $tagText = $tag->text();
        $closingParenthesisPosition = strpos($tagText, ')');

        if ($closingParenthesisPosition !== false) {
            $importantText = substr($tagText, 0, $closingParenthesisPosition + 1); // Sumar 1 para incluir el paréntesis
        } else {
            $importantText = $tagText;
        }

        ServerStatusModel::create([
            'status' => $importantText,
        ]);

        // \Log::info("$importantText\n");
        });
    }
}
