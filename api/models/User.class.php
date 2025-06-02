<?php

class User
{

  public $id;
  public $username;
  public $password;


  public function __construct($array = null)
  {
    if ($array != null) {
      $this->setId($array["id"]);
      $this->setUsername($array["username"]);
      $this->setPassword($array["password"]);
    }
  }

  public function getId()
  {
    return $this->id;
  }

  public function setId($id)
  {
    $this->id = intval($id);
  }

  public function getUsername()
  {
    return $this->username;
  }

  public function setUsername($username)
  {
    $this->username = $username;
  }

  public function getPassword()
  {
    return $this->password;
  }

  public function setPassword($password)
  {
    $this->password = $password;
  }
}
