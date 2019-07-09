@component('mail::message')
    TheSpace, тебе новое сообщение от: {!! $name !!}

    Имя: {{ $name }}
    Email: {{ $email }}
    Сообщение:
    {!! $user_message !!}

@endcomponent