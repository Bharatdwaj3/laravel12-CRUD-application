<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('blogs', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('content');
            $table->string('excerpt')->nullable();
            $table->string('author');
            //$table->foreignId('author')->constrained('users')->onDelete('cascade'); // users 'id' F
            $table->string('category'); // category name
            //$table->foreignId('category')->constrained('blog_categories')->onDelete('cascade'); // blog_categories 'id' FK

            $table->string('tags')->nullable();
            $table->string('image')->nullable();
            $table->tinyInteger('status')->default(0);  //published or not
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blogs');
    }
};
