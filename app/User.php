<?php

namespace App;


use App\Notifications\MyResetPassword;
use Carbon\Carbon;
use Illuminate\Contracts\Auth\CanResetPassword;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

use Morilog\Jalali\Jalalian;
use OwenIt\Auditing\Contracts\Auditable;
use Illuminate\Auth\Notifications\ResetPassword as ResetPasswordNotification;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable implements Auditable, CanResetPassword
{

    use \Illuminate\Auth\Passwords\CanResetPassword;
    use Notifiable;
    use \OwenIt\Auditing\Auditable;
    use SoftDeletes;
    use HasApiTokens;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $table = 'users';
    protected $fillable = [
        'username', 'first_name', 'last_name', 'email', 'password', 'img', 'verified',
        'token', 'phone_number', 'role', 'about', 'interests', 'posts', 'likes', 'dislikes', 'expires_at', 'deleted_at',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',

    ];

    public function getExpiresAtAttribute($value)
    {
        if (!$value) return $value;
        return \Morilog\Jalali\CalendarUtils::strftime('Y/m/d', strtotime($value));
    }

    public function sendPasswordResetNotification($token)
    {
        $this->notify(new MyResetPassword($token));
    }

    public function posts()
    {
        return $this->hasMany(Post::class);
    }

    public function findForPassport($username)
    {
        $fieldType = filter_var($username, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';
//        dd(User::where($fieldType, $username)->first());
        return
            User::where($fieldType, $username)->first();
    }
}
