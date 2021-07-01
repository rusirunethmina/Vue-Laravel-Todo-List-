<?php

namespace App;


use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $fillable = [

        'name',
        'completed',
        'completed_at',

    ];
}
