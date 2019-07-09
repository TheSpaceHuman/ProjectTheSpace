<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\Callback;
use Illuminate\Support\Facades\Mail;
use App\Jobs\SendEmailJob;

class MailController extends Controller
{
    public function sendCallback(Request $request)
    {

        dispatch(new SendEmailJob());
        echo 'Mail send';
    }
}
