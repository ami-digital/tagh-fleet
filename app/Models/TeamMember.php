<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Traits\HasRoles;

class TeamMember extends Model
{
    use  HasRoles ;
    protected $guarded =['roles'];
    protected $hidden =['password'];
}
