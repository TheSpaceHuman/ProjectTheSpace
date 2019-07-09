<?php

namespace App\Jobs;

use App\Mail\Callback;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;

class SendEmailJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

//    public $sendEmail, $name, $email, $message;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
//        $this->sendEmail = $sendEmail;
//        $this->name = $name;
//        $this->email = $email;
//        $this->message = $message;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $sendEmail = setting('notifications.email');
        $name = request('name');
        $email = request('email');
        $message = request('message');


        Mail::to($sendEmail)->send(new Callback($name, $email, $message));
    }
}
