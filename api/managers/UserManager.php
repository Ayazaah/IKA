<?php

class UserManager
{

  private $db;

  public function __construct($db)
  {
    $this->db = $db;
  }

  public function checkUser($username)
  {
    $user = null;
    $sql = "SELECT * from user where username=:username";
    try {
      $prep = $this->db->prepare($sql);
      $prep->bindParam(':username', $username, PDO::PARAM_STR);
      $prep->execute();
      $userArr = $prep->fetch(PDO::FETCH_ASSOC);
      $user = new User($userArr);
    } catch (PDOException $e) {
      die($e->getMessage());
    } finally {
      $prep = null;
    }
    return $user;
  }
}
