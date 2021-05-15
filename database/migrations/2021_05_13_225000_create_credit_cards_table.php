<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCreditCardsTable extends Migration
{
    /** Run the migrations. */
    public function up(): void
    {
        Schema::create('credit_cards', function (Blueprint $table) {
            $table->id();
            $table->string('bank_name');
            $table->string('owner_name');
            $table->string('number');
            $table->string('member_since');
            $table->string('valid_thru');
            $table->integer('security_code')->unsigned();
            $table->string('flag');
            $table->string('color');
            $table->string('text_color');
            $table->timestamps();
        });
    }

    /** Reverse the migrations. */
    public function down(): void
    {
        Schema::dropIfExists('credit_cards');
    }
}
